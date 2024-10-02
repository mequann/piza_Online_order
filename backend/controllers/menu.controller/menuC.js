const Pizza = require('../../models/pizzamodel/pizzaM');
const Topping = require('../../models/toppingsmodel/toppingM');

const menuCreater = async (req, res) => {
    try {
        const { name, price, toppings } = req.body;
        console.log(req.body,'ppppppppppppppp')

        // Ensure req.file is defined before accessing filename
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required.' });
        }

        const image = req.file.filename; // Get the path to the uploaded image
        // Parse toppings if it's a stringified array
        let parsedToppings = [];
        if (typeof toppings === 'string') {
            try {
                parsedToppings = JSON.parse(toppings);
            } catch (error) {
                return res.status(400).json({ message: 'Invalid toppings format.' });
            }
        }

        // Create the pizza item
        const menuItem = await Pizza.create({ name, price, image });

        // Check if toppings array is provided
        
        if (parsedToppings && Array.isArray(parsedToppings)) {
            // Create an array of topping creation promises
            const toppingPromises = parsedToppings.map(async (toppingName) => {
                // Find the topping or create it if it doesn't exist
                const [toppingInstance] = await Topping.findOrCreate({
                    where: { name: toppingName },
                    defaults: { name: toppingName },
                });
                return toppingInstance; // Return the topping instance
            });

            // Wait for all topping creation promises to resolve
            const toppingInstances = await Promise.all(toppingPromises);

            // Associate the toppings with the menu item
            await menuItem.setToppings(toppingInstances);
        } else {
            console.log('No toppings provided, skipping topping association.');
        }

        // Respond with the created menu item
        res.status(201).json(menuItem);
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const menuGetter = async (req, res) => {
    try {
        const menuItems = await Pizza.findAll({
            include: [
                {
                    association: 'Toppings',
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json({ menuItems });
    } catch (error) {
        console.error('Error getting menu items:', error.message);
        res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
    }
};

module.exports = { menuCreater, menuGetter };

# React Shopping Cart

#Step 1:  Create react app
#step 4: Project Development workflow
            1. Create Google Spreadsheet
            2. Add columns feature, Description, state and duration
            3. Enter prducts component, show list of products
            4. Add time and your rate
            5. Create github account
            6. Create new repo
            7. Add it as remote repository
            8. commit changes
            9. Push changes on gitthub
            10. Start => create new feture = google spreadsheets
            11. create new branch (feature 1)
            12. add "/branch feature1/" in app.js line1
            13. Commit changes
            14. Publish changes
            15. Open repo on github
            16. Create pull request
            17. Merge pull request
#step 7: Create cart component
        1. set active in task manager
        2. create new branch
        3. handle 'add to cart event' in product.js {using this.props.addToCart(product)}
        4.create add to cart function.
        4. App.js set initial state of cart as []
        5. Add cartItems to state as []
        6. Create addtoCart function and pass products as variable
            addToCart(product)
        7.Slice, check products existence in cart, then add to cart
        8. Cart.js 
        8. define cartItems, order from this.props
        9. check cartItems.length and show message
        10.list cartItems {cartItems.length > 0 **}
        11.styling
        12.style cart, header, cartItems, images and list of cartitems
        13.use localstorage on app constructor to load cart items(json.parse)
        14.use localstorage on addToCart and save cart items(json.stringify)
#step8 : Checkout Form
        1. Set active task management
        2. Create nwe branch
        3. Make items persisitent in Cart.js after refresh
        4. Use localStorage to load cart items
        5. Use localstorage on addtocart to save cart items
        6. Update showcheckout state to true on click
        7. Render checkout form conditionally
        8. Get user details
        9. Handle the input function
        10. Add checkout button
        11. handle onsubmit button
        12. Create order object and pass to parent to handle it
        13. publish changes
#step9 : Ading Modal and Animations
        1. Set active task in task manager
        2. Create a new branch of modal animation
        3. Show animations
        4. Install react reveal for animations
        5. Create the necessary effects
        6. Effect include: fade effect from bottom to top by products
                            fade left for adding to cart
                            open modal on click on a product
        7. install react modals for modals
        8. Import modal to rect files Product.js
        9. Set state for product to null
        10.Define open and close modal states
        11.Show modal if product exists
        12. create modal
        13. Create a zoom effect
        14. Style product details modal
        15. git hub 
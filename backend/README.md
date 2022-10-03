## Roles:
    1. Owner 
    2. Admin
    3. Customer
    4. Viewe(anonymes user)

## Feature per role:   
Viewer/Customer:

    1. View list of properties
    2. Search/Filtering (rest, sale, price, location, etc)
    3. Display property 
    4. Track property views
Viewer:

    1. Sign up as customer/owener
    2. Sign up as customer when submitting application
Customer:

    1. Submit an application(send an email to owner)
    2. Add to favorites 
    3. Create multiple favorite lists
    4. Manage favorite lists
    5. Edit profile
    6. Reset password by follow link
    7. List of submitter application
Owner:

    1. Dashboard (chart for view per location, also point 2)
    2. Display of owned properties (search, )
    3. Display property details page(with applications)
    4. List of applications for all properties
    5. Delete property
    6. Create property(upload pictrues, details, location, price, sale/rest)
    7. Edit profile
    8. Reset password by follow link
Admin:

    1. Dashboard (include 2 & 3)
    2. Display the last 10 properties rented.(all properites)
    3. Display 10 most recent customer.
    4. Display all customers/owners
    5. Display all properties
    6. Manage customer/owner (reset, delete)

## Backend endpoints:

    1. fetchAllProperties (Admin, Viewer, Customer) ReadyScreen/Priority
    2. fetchAllMyProperties (Owner)
    3. fetchProperty (Admin, Viewer, Customer) & update property views total ReadyScreen/Priority
    4. fetchPropertyWithRequest (Owner) 
    5. createProperty (Owner)  ReadyScreen
    6. myPropertiesStatistic (Owner)
    7. propertiesStatistic (Admin)  ReadyScreen
    8. deleteProperty (Owner, Admin) soft delete
    9. createRequest (Customer) then notify Owner by email ReadyScreen/Priority
    10. createFavoriteList & updateFavoriteList (Customer) ReadyScreen/Priority
    11. fetchFavoriteList (Customer) ReadyScreen/Priority
    12. acceptRequest (Owner) flag property as sold/flag request as accepted
    13. restPassword (Admin, Owner, Customer)  ReadyScreen
    14. fetchAllOwner (Admin)  ReadyScreen
    15. fetchAllCustomer (Admin)  ReadyScreen
    16. deleteUser (Admin)  ReadyScreen

## Done:
    1. UI 
    2. API
    3. Keycloak configuration
    4. Keycloak Dockerfile
    5. Reset password
    6. Registeration as customer

## Missing:
    1. UI/API integration
    2. Registeration as owner
    3. Integration with AWS S3
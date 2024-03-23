function UserAuthentication(req, res, next) {
    //Logic for user Authentication
    console.log('Checked, User is Authenticated');
    next();
}

function isAdmin(req, res, next) {
    //Logic for user Authentication
    console.log('User is Admin');
    next();
}

module.exports =
{
    UserAuthentication
    , isAdmin
};
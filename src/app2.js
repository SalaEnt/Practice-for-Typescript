function getUserEmail(user) {
    var _a;
    switch (typeof ((_a = user.profile) === null || _a === void 0 ? void 0 : _a.email)) {
        case "string": {
            return user.profile.email;
        }
        default:
            return "there is no email";
    }
    // اگر ایمیل نبود "no-email"
}
console.log(getUserEmail({ profile: { age: 50 } }));

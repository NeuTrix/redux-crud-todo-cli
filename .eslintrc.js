module.exports = {
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": { 
        "es6": true,
        "mocha": true
     },
    "parserOptions": {
        "ecmaVersion": 6,
            "sourceType": "module",
                "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
}
};
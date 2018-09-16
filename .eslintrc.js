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
        "semi": 2,
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called",
                "message": "Unexpected console statement"
            }
        ]
    }
};
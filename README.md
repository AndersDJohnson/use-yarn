# use-yarn
> Force users to use `yarn` instead of `npm`.

If running `npm install` instead of `yarn`, the process will exit with error code `1`
and print an [error message](https://raw.githubusercontent.com/AndersDJohnson/use-yarn/master/message.txt).

Note: this will not work if installing specific packages like `npm install my-package`.

Note: this will not work if used with `npm install --save-dev --ignore-scripts`.

Note: Use with `>= yarn@1` requires `>= use-yarn@2`.

See docs at: https://andersdjohnson.com/code/use-yarn/

# example-jest-promise-mock
An MVP example of the issues I've found mocking promises in Jest


# What to do
Clone, and run:
`yarn test`
You'll see the jestmock test fail, and the standard one will hang.

Now run:
`yarn test2`
You'll see the jestmock test succeed, and the standard one will hang.

# What's going on here?
Jest uses promises under the hood, so mocking out the global promise in the normal way using `promise-mock` can cause the tests to hang.
Our approach to get around this was to import promises wherever they are used, so that they can be mocked in tests. Ugly, but expedient.

However, a subtle issue arises when we include `promise-polyfill` in our package.json, and when that version is different from the one installed
under `promise-mock`. They end up patching different instances of the Promises' `_immediateFn` and nothing works as expected.


# Silent Firestore Data Write Failure

This repository demonstrates a subtle bug in a Firebase Firestore application where data isn't written to the database despite seemingly correct code and successful authentication. The issue arises from an asynchronous operation modifying data used in the write operation before the write completes.

## Bug Description
The `set()` method appears to execute without errors, but the data isn't saved in Firestore.  This is due to an asynchronous task updating the data used for the write after the `set()` call begins but before it finishes.

## How to Reproduce
1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project.
4. Run `bug.js`.
5. Observe that the data is not written to Firestore.

## Solution
The solution involves ensuring the asynchronous operation does not modify the data used for the write before the write operation completes. This can be done by using promises or async/await to synchronize the operations.

## License
MIT
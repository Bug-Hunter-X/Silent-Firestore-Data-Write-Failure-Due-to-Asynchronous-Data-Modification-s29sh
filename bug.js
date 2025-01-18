In a Firebase project, I encountered an unusual issue where data wasn't being written to Firestore despite seemingly correct code and successful authentication.  The `set()` method appeared to execute without error, but the data remained absent from the database.  Debugging revealed that the issue stemmed from an asynchronous operation within the `set()` call's callback. The asynchronous task was modifying a crucial piece of data used in the database write operation before the write could complete, leading to an unexpected data loss.

```javascript
// Buggy Code
firebase.firestore().collection('myCollection').doc('myDoc').set({
  data: someData,
}).then(() => {
  // Asynchronous operation modifying someData
  someAsyncOperation().then(() => {
    // someData is modified here after set() has finished
  });
});
```
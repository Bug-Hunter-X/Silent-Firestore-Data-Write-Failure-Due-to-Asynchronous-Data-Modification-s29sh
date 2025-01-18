The solution ensures the asynchronous operation completes before the data used in the database write is modified.

```javascript
// Solution Code
async function writeData(){
  let someData = { ... }; // your data
  const writePromise = firebase.firestore().collection('myCollection').doc('myDoc').set({
      data: someData,
  });
  await writePromise; // wait for write to finish
  await someAsyncOperation(); // Modify someData AFTER writing completes
}
writeData()
```
By using `async/await`, we ensure `someAsyncOperation()` only executes after the `set()` operation is finished, preventing the data race condition.
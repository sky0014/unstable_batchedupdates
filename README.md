# unstable_batchedupdates
A wrapper for react unstable_batchedupdates, support react-dom and react-native

## Install
```bash
npm install unstable_batchedupdates
```

## Usage
```js
import unstable_batchedupdates from 'unstable_batchedupdates';

unstable_batchedupdates(()=>{
    this.setState(...);
    this.setState(...);
    this.setState(...);
});
```

## Publish
If your first time publish a package, login first:
```bash
npm login --registry=http://registry.npmjs.org
```
Then you can publish:
```bash
npm run pub
```

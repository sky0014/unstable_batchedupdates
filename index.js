import { unstable_batchedUpdates } from "./batch";

export default unstable_batchedUpdates || ((cb) => cb());

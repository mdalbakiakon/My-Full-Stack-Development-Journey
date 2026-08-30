# Mongoose Cheat Sheet

A complete reference of Mongoose model methods, query modifiers, and schema features — with simple examples and plain-language explanations.

---

## 1. Creating Documents

| Method | Example | What it does |
|---|---|---|
| `.create()` | `await User.create({ email, password })` | Builds and saves a brand new document in one step. Runs schema validators and `pre("save")` hooks. |
| `new Model() + .save()` | `const u = new User({ email }); await u.save();` | Builds a document in memory first (lets you modify it before saving), then saves it. Also runs validators and hooks. |
| `.insertMany()` | `await User.insertMany([{...}, {...}])` | Inserts multiple documents in one batch call. Faster than looping `.create()` one at a time. **Skips `pre("save")` hooks by default** — only `pre("insertMany")` hooks run. |

---

## 2. Reading / Finding Documents

| Method | Example | What it does |
|---|---|---|
| `.find()` | `await User.find({ role: "artist" })` | Returns an **array** of all documents matching the filter. Empty filter `{}` returns everything. |
| `.findOne()` | `await User.findOne({ email })` | Returns the **first single** document matching the filter, or `null` if none found. |
| `.findById()` | `await User.findById(userId)` | Shorthand for `findOne({ _id: userId })`. Only works with the `_id` field. |
| `.countDocuments()` | `await User.countDocuments({ role: "artist" })` | Returns the **number** of documents matching the filter, not the documents themselves. |
| `.exists()` | `await User.exists({ email })` | Returns `{ _id: ... }` if a match exists, or `null`. Faster than `.findOne()` when you only need a yes/no answer. |
| `.distinct()` | `await User.distinct("role")` | Returns an array of all **unique values** for a given field across matching documents. |

---

## 3. Updating Documents

| Method | Example | What it does |
|---|---|---|
| `.findByIdAndUpdate()` | `await User.findByIdAndUpdate(id, { $set: { name } }, { returnDocument: 'after' })` | Finds by `_id` and updates it in one atomic step. Skips schema validators unless `runValidators: true` is set. Does **not** trigger `pre("save")` hooks. |
| `.findOneAndUpdate()` | `await Fav.findOneAndUpdate({ userId }, { $addToSet: { list: id } }, { upsert: true })` | Same as above but matches by any filter, not just `_id`. Supports `upsert: true` to create the document if no match is found. |
| `.updateOne()` | `await User.updateOne({ email }, { $set: { isOnline: true } })` | Updates the first matching document but does **not** return it — just a status report (`matchedCount`, `modifiedCount`). |
| `.updateMany()` | `await User.updateMany({ role: "student" }, { $set: { isActive: true } })` | Updates **every** document matching the filter, not just the first one. |
| `document.save()` | `user.password = newPass; await user.save();` | Fetch a real document first, modify its fields in memory, then persist. **Only method that runs `pre("save")` hooks and `isModified()` checks.** |

### Common Update Operators (used inside `$set`, etc.)

| Operator | Example | What it does |
|---|---|---|
| `$set` | `{ $set: { title: "New" } }` | Sets/replaces the value of a field. |
| `$push` | `{ $push: { list: id } }` | Adds a value to an array — always, even if it's a duplicate. |
| `$addToSet` | `{ $addToSet: { list: id } }` | Adds a value to an array **only if it isn't already present** (no duplicates). |
| `$each` | `{ $addToSet: { list: { $each: [id1, id2] } } }` | Used with `$push`/`$addToSet` to add **multiple** values at once instead of one. |
| `$pull` | `{ $pull: { list: id } }` | Removes all instances of a value from an array. |
| `$inc` | `{ $inc: { views: 1 } }` | Increments (or decrements, with a negative number) a numeric field. |
| `$unset` | `{ $unset: { bio: "" } }` | Removes a field from the document entirely. |

---

## 4. Deleting Documents

| Method | Example | What it does |
|---|---|---|
| `.findByIdAndDelete()` | `await User.findByIdAndDelete(id)` | Finds by `_id`, deletes it, and returns the deleted document. |
| `.findOneAndDelete()` | `await Music.findOneAndDelete({ authorId })` | Same but matches by any filter. Returns the deleted document. |
| `.deleteOne()` | `await User.deleteOne({ email })` | Deletes the first match. Returns only a status report, not the document. |
| `.deleteMany()` | `await Music.deleteMany({ authorId })` | Deletes **every** matching document — e.g. remove all songs by one artist. |

---

## 5. Query Modifiers (chained onto find methods)

| Modifier | Example | What it does |
|---|---|---|
| `.select()` | `User.find().select("email role")` | Limits which fields are returned. Prefix with `-` to exclude, e.g. `.select("-password")`. |
| `.sort()` | `User.find().sort({ createdAt: -1 })` | Orders results. `1` = ascending, `-1` = descending. |
| `.limit()` | `User.find().limit(10)` | Caps the number of documents returned. |
| `.skip()` | `User.find().skip(20).limit(10)` | Skips the first N documents — used for pagination. |
| `.populate()` | `Album.find().populate("musicList")` | Replaces `ObjectId` references with the actual referenced documents. |
| `.lean()` | `User.find().lean()` | Returns plain JavaScript objects instead of full Mongoose documents — faster, but loses document methods like `.save()` and virtuals. |

---

## 6. Document Instance Properties & Methods

These only exist on real documents (from `.save()`/`new Model()`/`.findOne()`), not on plain query results with `.lean()`.

| Property/Method | Example | What it does |
|---|---|---|
| `.isModified()` | `this.isModified("password")` | Returns `true` if a field has been changed since the document was loaded/created. Used inside `pre("save")` hooks to skip unnecessary work. |
| `.isNew` | `if (user.isNew) {...}` | `true` if the document hasn't been saved to the database yet. |
| `._id` | `user._id` | The document's unique MongoDB identifier (an `ObjectId`). |
| `.toObject()` | `user.toObject()` | Converts a Mongoose document into a plain JS object. |
| `.toJSON()` | `user.toJSON()` | Similar to `.toObject()`, automatically used when a document is passed to `res.json()`. |
| `.equals()` | `id1.equals(id2)` | Correctly compares two `ObjectId`s by value (safer than `===`, which compares by reference). |

---

## 7. Schema-Level Features

| Feature | Example | What it does |
|---|---|---|
| `pre("save")` | `schema.pre("save", function(next) {...})` | Runs custom logic **before** a document is saved via `.save()`/`.create()`. Common use: password hashing. |
| `post("save")` | `schema.pre("save", function(doc) {...})` | Runs **after** a document has been saved — e.g. sending a welcome email. |
| `pre("findOneAndUpdate")` | `schema.pre("findOneAndUpdate", function(next) {...})` | Runs before a query-based update. `this` refers to the **query**, not the document, so `isModified()` isn't available here. |
| `methods` | `schema.methods.comparePassword = function(pw) {...}` | Adds a custom method callable on document **instances**: `user.comparePassword(pw)`. |
| `statics` | `schema.statics.findByEmail = function(email) {...}` | Adds a custom method callable on the **model** itself: `User.findByEmail(email)`. |
| `virtuals` | `schema.virtual("fullName").get(function() {...})` | Defines a computed field that isn't stored in the database, calculated on the fly (e.g. combining first + last name). |
| `index()` | `schema.index({ email: 1 })` | Creates a database index to speed up queries on that field. |

---

## 8. Common Schema Field Options

| Option | Example | What it does |
|---|---|---|
| `required` | `required: [true, 'email is required']` | Field must be present, or save/validation fails with the given message. |
| `unique` | `unique: true` | No two documents can share the same value for this field (enforced via a database index). |
| `sparse` | `sparse: true` | Used with `unique` on **optional** fields — allows multiple documents to have no value at all without conflicting. |
| `default` | `default: ""` | Value used automatically if none is provided. |
| `enum` | `enum: ["artist", "listener"]` | Restricts a string field to a fixed set of allowed values. |
| `select` | `select: false` | Field is excluded from query results by default (e.g. `password`) — must be explicitly requested with `.select("+password")`. |
| `ref` | `ref: "users"` | Marks an `ObjectId` field as a reference to another collection, enabling `.populate()`. |
| `set` | `set: (val) => val.trim()` | A function that transforms a value every time it's assigned, before validation/saving. |
| `get` | `get: (val) => val.toFixed(2)` | A function that transforms a value every time it's read back out. |

---

## Quick Decision Guide

| Situation | Use |
|---|---|
| Creating a brand-new, independent document | `.create()` |
| Might already exist, and you want update-or-create in one step | `.findOneAndUpdate()` + `upsert: true` |
| Need `pre("save")` hooks or `isModified()` to run | `.save()` (fetch → modify → save) |
| Just need document(s), no modification | `.find()` / `.findOne()` / `.findById()` |
| Need to enforce validation rules on an update | Add `runValidators: true` |
| Need the updated (not original) document back | Add `returnDocument: 'after'` |

# JavaScript Functions Cheat Sheet

Practical reference for array, string, object, and async methods — when to use each, and performance notes for real backend work (Node/Express/Mongoose).

---

## 1. Array Methods — Reading/Transforming (non-mutating)

These return a **new** array/value and don't change the original — generally preferred, since mutating shared data causes hard-to-trace bugs.

| Method | Example | When to use | Performance note |
|---|---|---|---|
| `.map()` | `arr.map(x => x * 2)` | Transform every item into something new, same length out as in. | O(n). Don't use if you're not using the returned array — use `.forEach()` instead. |
| `.filter()` | `arr.filter(x => x > 5)` | Keep only items matching a condition. Returns a possibly-shorter array. | O(n). Combine with `.map()` sparingly — chaining both means iterating twice; a single `.reduce()` can do both in one pass if performance is critical. |
| `.reduce()` | `arr.reduce((sum, x) => sum + x, 0)` | Collapse an array into a single value (sum, object, grouped data, etc). Most flexible/powerful array method. | O(n), single pass. Harder to read for beginners — use `.map()`/`.filter()` first unless reduce genuinely simplifies the logic. |
| `.find()` | `arr.find(x => x.id === targetId)` | Get the **first** item matching a condition, or `undefined`. | O(n) worst case, but **stops early** once found — faster than `.filter()[0]` which always scans the whole array. |
| `.findIndex()` | `arr.findIndex(x => x.id === id)` | Same as `.find()` but returns the **index**, not the item. Returns `-1` if not found. | Same early-exit behavior as `.find()`. |
| `.some()` | `arr.some(x => x.age > 18)` | Check if **at least one** item matches — returns `true`/`false`. | Stops at first match — faster than `.filter().length > 0`. |
| `.every()` | `arr.every(x => x.age > 18)` | Check if **all** items match — returns `true`/`false`. | Stops at first failure — efficient for validation checks. |
| `.includes()` | `arr.includes(5)` | Check if an array contains an exact value (primitives only). | O(n). For objects, `.includes()` checks reference equality — use `.some()` instead for object matching. |
| `.slice()` | `arr.slice(0, 3)` | Extract a portion of an array **without modifying** the original. | Non-mutating — always prefer this over `.splice()` unless you specifically need mutation. |
| `.flat()` | `arr.flat()` | Flattens nested arrays by one level (`.flat(Infinity)` for full flatten). | Rarely a bottleneck; used for cleaning up nested data structures. |
| `.sort()` | `arr.sort((a, b) => a - b)` | Sorts an array. **Mutates the original array!** | Always provide a comparator function for numbers — `arr.sort()` alone treats numbers as strings (`10` sorts before `2`). |

---

## 2. Array Methods — Looping (mutating / side-effect focused)

| Method | Example | When to use | Performance note |
|---|---|---|---|
| `.forEach()` | `arr.forEach(x => console.log(x))` | Run side effects (logging, pushing to an outside variable) — no return value used. | **Does NOT wait for `async` callbacks** — never use with `await` inside. Use `for...of` instead for async work. |
| `for...of` | `for (const x of arr) { await doSomething(x); }` | The correct loop for **sequential async operations** — each iteration properly waits. | Slower than `Promise.all()` for independent async tasks, but necessary when order matters or later steps depend on earlier ones. |
| `.push()` / `.pop()` | `arr.push(item)` | Add/remove from the **end** of an array. | O(1) — fast, no reindexing needed. |
| `.shift()` / `.unshift()` | `arr.unshift(item)` | Add/remove from the **start** of an array. | O(n) — every other element has to shift index. Avoid in large arrays/loops if avoidable. |
| `.splice()` | `arr.splice(2, 1)` | Remove/insert items at a specific index. **Mutates the original array.** | Use `.slice()` + spread instead if you want to avoid mutating shared/state data (e.g. in React). |

---

## 3. String Methods

| Method | Example | When to use | Performance note |
|---|---|---|---|
| `.split()` | `"a,b,c".split(",")` | Turn a string into an array, breaking on a delimiter. | Fine for typical use; avoid on huge strings in hot loops. |
| `.join()` | `["a","b"].join("-")` | Turn an array back into a string with a separator. | Much faster than string concatenation (`+=`) in a loop for building large strings. |
| `.slice()` | `"hello".slice(1, 3)` | Extract part of a string by index. Accepts negative indexes (`slice(-3)` = last 3 chars). | Preferred over `.substring()` — more predictable with negative numbers. |
| `.trim()` | `"  hi  ".trim()` | Remove leading/trailing whitespace — essential before saving user input. | Cheap operation, use freely on all user-submitted text fields. |
| `.includes()` | `"hello world".includes("world")` | Check if a substring exists — clearer than `.indexOf() !== -1`. | O(n), fine for normal string lengths. |
| `.replace()` | `"foo bar".replace("foo", "baz")` | Replace first match. Use `.replaceAll()` for every match, or a regex with `/g` flag. | Regex-based replace is more powerful but slightly slower — use plain string replace when you don't need patterns. |
| `.charAt()` | `"hello".charAt(0)` | Get character at index. Never throws — returns `""` if out of range. | Safer than `str[0]` when the string might be empty (`str[0]` returns `undefined`, `.charAt(0)` returns `""`). |
| `.toUpperCase()` / `.toLowerCase()` | `"abc".toUpperCase()` | Case conversion — used constantly for normalizing emails/usernames before saving. | Cheap; always normalize case before uniqueness checks (`findOne({ email })`) to avoid case-sensitive duplicate bugs. |
| `.padStart()` / `.padEnd()` | `"5".padStart(2, "0")` → `"05"` | Pad a string to a fixed length — common for formatting IDs, times, invoice numbers. | Cheap, no real performance concern. |
| `.repeat()` | `"ab".repeat(3)` → `"ababab"` | Repeat a string N times. | Rarely a bottleneck. |

---

## 4. Object Methods

| Method | Example | When to use | Performance note |
|---|---|---|---|
| `Object.keys()` | `Object.keys(user)` | Get an array of a plain object's keys. | O(n) where n = number of keys — fine for typical objects. |
| `Object.values()` | `Object.values(user)` | Get an array of a plain object's values. | Same cost as `.keys()`. |
| `Object.entries()` | `Object.entries(user)` | Get `[key, value]` pairs — great for looping with `for...of`. | Common pattern: `for (const [key, val] of Object.entries(obj))`. |
| `Object.assign()` | `Object.assign({}, defaults, overrides)` | Merge objects (shallow). Later sources overwrite earlier ones. | Shallow only — nested objects get replaced whole, not deep-merged. Spread (`{...a, ...b}`) is equivalent and more common now. |
| `{...obj}` (spread) | `{ ...user, isOnline: true }` | Create a shallow copy of an object with some fields overridden. | Preferred modern syntax over `Object.assign()` — same performance, cleaner to read. |
| `Object.freeze()` | `Object.freeze(config)` | Prevent an object from being modified (constants, config objects). | Shallow freeze only — nested objects inside can still be mutated unless frozen individually. |

---

## 5. Async / Promise Patterns

| Pattern | Example | When to use | Performance note |
|---|---|---|---|
| `for...of` + `await` | `for (const id of ids) { await Model.findById(id); }` | Sequential — each operation waits for the previous one. Use when order matters or each step depends on the last. | **Slowest for independent operations** — N operations take N × (time per operation), since nothing runs in parallel. |
| `Promise.all()` | `await Promise.all(ids.map(id => Model.findById(id)))` | Run independent async operations **in parallel**. Use when order doesn't matter and operations don't depend on each other. | Much faster for independent DB calls — N operations take roughly the time of the *slowest single one*, not the sum. **Fails entirely if even one promise rejects.** |
| `Promise.allSettled()` | `await Promise.allSettled(promises)` | Like `Promise.all()`, but doesn't fail-fast — gives you the result/error of **every** promise, even if some failed. | Use when partial failure is acceptable (e.g. sending notifications to 10 users — one failing shouldn't stop the other 9). |
| `.forEach()` + `async` | ~~`arr.forEach(async x => await f(x))`~~ | **Never use this.** | Silently broken — `.forEach()` doesn't wait for the async callbacks, so code after it runs before the async work finishes. |

---

## 6. Quick Decision Guide

| I want to... | Use |
|---|---|
| Transform every item into something new | `.map()` |
| Keep only items matching a condition | `.filter()` |
| Get one value out of the whole array (sum, grouped object, etc.) | `.reduce()` |
| Find the first matching item | `.find()` (not `.filter()[0]` — slower) |
| Check "does at least one match" | `.some()` |
| Check "do all match" | `.every()` |
| Loop with side effects only, no async | `.forEach()` |
| Loop with `await` inside | `for...of` (never `.forEach()`) |
| Run many independent async calls fast | `Promise.all()` |
| Run many async calls where some are allowed to fail | `Promise.allSettled()` |
| Copy an object with a few fields changed | `{ ...obj, field: newValue }` |
| Build a string from array pieces | `.join()` (not `+=` in a loop) |

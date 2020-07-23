---
templateKey: 'notes-post'
title: "'pointer-events' property for interaction with elements behind"
date: 2020-07-24T12:00:00+08:00
category: ['css']
---

> pointer-events: `auto` - Default behavior

> pointer-events: `none` - The element is never the target of pointer events; however, pointer events **may target its descendant elements** if those descendants have pointer-events set to some other value. In these circumstances, pointer events will trigger event listeners on this parent element as appropriate on their way to/from the descendant during the event capture/bubble phases.

Other properties are for interaction with SVG only.

## Usages

- Disable `active` link
- Interaction with elements behind

## References

- [MDN web docs: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [穿透的 div (pointer-events)](https://www.oxxostudio.tw/articles/201409/pointer-events.html)
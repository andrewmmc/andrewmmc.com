---
templateKey: 'notes-post'
title: "Mac-like blur backdrop effect"
date: 2020-10-08T12:00:00+08:00
category: ['css']
---

It applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.

```css
div {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}
```

## Notes
- IE is not supported
- Current status: Editor's Draft

## References

- [MDN web docs: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

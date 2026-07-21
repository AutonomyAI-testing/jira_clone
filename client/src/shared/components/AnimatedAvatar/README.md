# AnimatedAvatar

Circular avatar with a sky-blue gradient ring and optional wave animation.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | `64` | Avatar diameter in px (excluding border) |
| `src` | string | built-in kitten | Image URL or data URI |
| `alt` | string | `'Waving kitten avatar'` | Accessible label |
| `animated` | bool | `true` | Wave + glow animation |
| `name` | string | — | Optional `data-testid` suffix |
| `className` | string | — | Optional class on the ring |

## Usage

```jsx
import { AnimatedAvatar } from 'shared/components';

<AnimatedAvatar size={48} animated />
```

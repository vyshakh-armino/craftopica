# How to Add Your Craftopica Logo

## Quick Steps:

1. **Save your logo image** with the filename `logo.png` 
2. **Place it in the `public` folder** at: `d:\Projects\craft\web\public\logo.png`
3. The page will **automatically refresh** and show your logo

## Logo Requirements:

- **Filename**: Must be named exactly `logo.png`
- **Location**: `public/logo.png` (in the public folder)
- **Format**: PNG, JPG, or SVG (PNG with transparent background recommended)
- **Size**: 200x200 pixels or larger (square format works best)
- **Background**: Transparent background looks best

## Where the Logo Appears:

1. **Header** - Top left corner next to "Craftopica" text
2. **Browser Tab** - As the favicon/tab icon

## If Using a Different Filename:

If your logo has a different name (e.g., `craftopica-logo.jpg`), you can either:

**Option 1**: Rename your file to `logo.png`

**Option 2**: Update the code in `src/App.vue` line 30:
```vue
<img src="/your-logo-filename.jpg" alt="Craftopica Logo" />
```

And in `index.html` line 5:
```html
<link rel="icon" type="image/png" href="/your-logo-filename.jpg" />
```

## Current Status:

- ✅ Logo code is integrated in the header
- ✅ Favicon is configured
- ⏳ Waiting for you to add the actual logo image file

## Need Help?

The logo from your image should be saved to:
```
d:\Projects\craft\web\public\logo.png
```

Once you save it there, refresh your browser at http://localhost:5173/ to see it!


# 🧱 Data Layer Manager

A modular and automated **Google Tag Manager (GTM)** Data Layer manager designed to **validate**, **normalize**, and **document** GTM event structures from JSON templates.
It ensures data integrity and consistency between front-end events and GTM, while automatically generating human-readable documentation.


## 🚀 Overview

Traditional GTM event management often becomes messy and inconsistent across pages and teams.
This tool introduces a **template-driven** approach where each GTM event is defined as a JSON schema, including type requirements, defaults, and descriptions.

From these templates, the system:

- ✅ Validates and cleans GTM event payloads before pushing to `dataLayer`.
- 📄 Generates automatic Markdown documentation for every template.
- 🧩 Supports both modular and unified documentation output.
- ⚙️ Provides a Node.js CLI for automation and CI integration.

## 📦 Features

| Feature | Description |
|----------|-------------|
| 🧠 **Template-based validation** | Define each event with a JSON template including field types and required properties. |
| ⚙️ **Deep clean & normalization** | Ensures values are formatted and sanitized before pushing to GTM. |
| 🧾 **Auto documentation** | Generates `.md` documentation directly from JSON templates. |
| 🗂️ **CLI Tool** | Run `generate-docs` from the terminal to generate docs. |
| 🧰 **Flags** | `--merge`, `--out` |
| 🔍 **Field validation** | Warns when required fields are missing in the `structureExpected`. |

---

## 🧩 Example Template

```json
{
  "view_item": {
    "event": "view_item",
    "event_type": "event_ecomm_recommended",
    "ecommerce": {
      "currency": "usd",
      "value": { "required": true, "type": "number" },
      "items": [
        {
          "item_id": { "type": "number", "required": true },
          "item_name": "",
          "item_variant": "",
          "item_vendor": "",
          "price": { "required": true, "type": "number" }
        }
      ]
    },
    "docs": {
      "description": "Triggered when a product is viewed on the website.",
      "structureExpected": {
        "event": "view_item",
        "event_type": "event_ecomm_recommended",
        "ecommerce": {
          "currency": "usd",
          "value": 19.47,
          "items": [
            {
              "item_id": 3405127896,
              "item_name": "cool-hat",
              "item_variant": "black-white",
              "item_vendor": "hat-company",
              "price": 19.47
            }
          ]
        }
      }
    }
  }
}
```

## ⚙️ Usage Example

```javascript
import GoogleTagManager from './src/googleTagManager.js';
import TEMPLATE_GENERAL from './src/templates/general.json';
import TEMPLATE_PRODUCT from './src/templates/product.json';
import TEMPLATE_CART from './src/templates/cart.json';

const googleTagManager = new GoogleTagManager({
  ...TEMPLATE_GENERAL,
  ...TEMPLATE_PRODUCT,
  ...TEMPLATE_CART,
});

window.googleTagManager = googleTagManager;

window.googleTagManager.pushToDataLayer('view_item', {
  event: 'view_item',
  event_type: 'event_ecomm_recommended',
  ecommerce: {
    currency: 'usd',
    value: 14.99,
    items: [
      {
        item_id: 56012347401,
        item_name: 'by-hearts-hat',
        item_variant: 'blue',
        item_vendor: 'by-hearts',
        price: 14.99
      }
    ]
  }
});
```

## 🖥️ CLI Usage

After installing or linking the project:

### Generate individual docs per template
```bash
npx generate-docs ./templates --out ./docs
```

### Merge all docs into a single file
```bash
npx generate-docs ./templates --merge --out ./docs
```

### Output example:
```
docs/
 ├─ general.md
 ├─ product.md
 ├─ cart.md
 └─ ALL_EVENTS.md
```
Each Markdown includes:
- A summary (Table of Contents)
- File name
- Description
- Expected structure (structureExpected)
- Detailed field breakdown

## 🧪 Template Validation
When generating documentation, the CLI automatically validates all templates:
- Checks for missing required fields in structureExpected
- Warns directly in the console
- Ensures consistency across events
Example console output:
```
⚠️ Missing required fields in product.json:
- view_item.ecommerce.items[0].price
```

## 🧰 Installation
link locally for development:
```bash
npm link
```

## 🧱 Project Structure
```
/src
 ├─ googleTagManager.js      # Core logic for GTM event validation and normalization
 ├─ generateDocs.js          # CLI documentation generator
/templates
 ├─ general.json
 ├─ product.json
 ├─ cart.json
/bin
 └─ generate-docs            # CLI entry point
/docs
 └─ ALL_EVENTS.md            # Auto-generated output
```

## 🧾 License
ISC License

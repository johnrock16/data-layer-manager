# 📘 Documentation — product.json

## 📜 Sumário

- [view_item](#view-item)
- [view_items](#view-items)
## view_item

An event triggered whenever the product is viewed.

**Template file:** `product.json`

### ⚙️ Detailed Structure

- **event**: view_item (string)
- **event_type**: event_ecomm_recommended (string)
- **ecommerce**:
  - **currency**: usd (string)
  - **value**  (number) ✅ required
  - **items** (array):
    - **item_id**  (number) ✅ required
    - **item_name**:  (string)
    - **item_variant**:  (string)
    - **item_vendor**:  (string)
    - **price**  (number) ✅ required

### 🧩 Expected Payload

```json
{
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
```

## view_items

**Template file:** `product.json`

### ⚙️ Detailed Structure

- **event**: view_items (string)
- **event_type**: event_ecomm_recommended (string)
- **custom_title**:  (string)
- **ecommerce**:
  - **currency**: usd (string)
  - **value**  (number) ✅ required
  - **items** (array):
    - **item_id**  (number) ✅ required
    - **item_name**:  (string)
    - **item_variant**:  (string)
    - **item_vendor**:  (string)
    - **price**  (number) ✅ required


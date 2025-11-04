# 📘 Full Documentation — All Events



## 📜 Summary

- [view_cart](#view-cart)
- [add_to_cart](#add-to-cart)
- [remove_from_cart](#remove-from-cart)
- [click](#click)
- [view_item](#view-item)
- [view_items](#view-items)



---

# 📘 Documentation — cart.json

## 📜 Sumário

- [view_cart](#view-cart)
- [add_to_cart](#add-to-cart)
- [remove_from_cart](#remove-from-cart)
## view_cart

**Original file:** `cart.json`

### ⚙️ Detailed Structure

- **event**: view_cart (string)
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
    - **quantity**  (number) ✅ required

## add_to_cart

**Original file:** `cart.json`

### ⚙️ Detailed Structure

- **event**: add_to_cart (string)
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
    - **quantity**  (number) ✅ required

## remove_from_cart

**Original file:** `cart.json`

### ⚙️ Detailed Structure

- **event**: remove_from_cart (string)
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
    - **quantity**  (number) ✅ required


---

# 📘 Documentation — general.json

## 📜 Sumário

- [click](#click)
## click

**Original file:** `general.json`

### ⚙️ Detailed Structure

- **event**: click (string)
- **event_type**: event_custom (string)
- **custom_section**:  (string)
- **custom_type**:  (string)
- **custom_title**  (string) ✅ required


---

# 📘 Documentation — product.json

## 📜 Sumário

- [view_item](#view-item)
- [view_items](#view-items)
## view_item

Um evento atrelado ao produto sempre que o produto é visto.

**Original file:** `product.json`

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

**Original file:** `product.json`

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


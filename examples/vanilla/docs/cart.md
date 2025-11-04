# 📘 Documentation — cart.json

## 📜 Sumário

- [view_cart](#view-cart)
- [add_to_cart](#add-to-cart)
- [remove_from_cart](#remove-from-cart)
## view_cart

**Template file:** `cart.json`

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

**Template file:** `cart.json`

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

**Template file:** `cart.json`

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


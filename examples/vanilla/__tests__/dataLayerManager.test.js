import DataLayerManager from '../../../src/dataLayerManager.js';
import GOOGLE_TAG_MANAGER_CONFIG from '../dataLayerManager.config.js';
import TEMPLATE_GENERAL from '../templates/general.json';
import TEMPLATE_PRODUCT from '../templates/product.json';
import TEMPLATE_CART from '../templates/cart.json';


describe('dataLayerManager', () => {
  describe('product events', () => {
    beforeEach(() => {
      global.window = Object.create({});
      global.window.dataLayer = [];
      global.window.location = {};
      global.window.location.pathname = '/products/cool-hat';
      window.product = { handle: 'cool-hat' }
    });
    describe('happy path', () => {

      const googleTagManager = new DataLayerManager({...TEMPLATE_PRODUCT}, GOOGLE_TAG_MANAGER_CONFIG, { test: true });

      test('view_item - default', () => {
        const eventPushed = googleTagManager.pushToDataLayer('view_item', {
          "ecommerce": {
            "currency": "usd",
            "value": 14.99,
            "items": [
              {
                "item_id": 56012347401,
                "item_name": 'cool-hat',
                "item_variant": "blue",
                "item_vendor": "by-hats",
                "price": 14.99
              }
            ]
          }
        });
        expect(eventPushed.ok).toBeTruthy();
      });

      test('view_item - not required properties missing', () => {
        const eventPushed = googleTagManager.pushToDataLayer('view_item', {
          "ecommerce": {
            "currency": "usd",
            "value": 14.99,
            "items": [
              {
                "item_id": 56012347401,
                "price": 14.99
              }
            ]
          }
        });
        expect(eventPushed.ok).toBeTruthy();
      });

      test('view_item - string normalized', () => {
        const eventPushed = googleTagManager.pushToDataLayer('view_item', {
          "ecommerce": {
            "currency": "usd",
            "value": 14.99,
            "items": [
              {
                "item_id": 56012347401,
                "item_name": 'cool hat', //needs to be normalized
                "item_variant": "blue",
                "item_vendor": "by-hats",
                "price": 14.99
              }
            ]
          }
        });
        expect(eventPushed.ok).toBeTruthy();
        expect(eventPushed.event.ecommerce.items[0].item_name).toBe('cool-hat');
      });
    });

    describe('bad path', () => {

      const googleTagManager = new DataLayerManager({...TEMPLATE_PRODUCT}, GOOGLE_TAG_MANAGER_CONFIG, { test: true });

      test('view_item - required item missing', () => {
        const eventPushed = googleTagManager.pushToDataLayer('view_item', {
          "ecommerce": {
            "currency": "usd",
            "value": 14.99,
            "items": [
              {
                "item_name": 'cool-hat',
                "item_variant": "blue",
                "item_vendor": "by-hats",
                "price": 14.99
              }
            ]
          }
        });
        expect(eventPushed.error).toBeTruthy();
      });

      test('view_item - wrong type', () => {
        const eventPushed = googleTagManager.pushToDataLayer('view_item', {
          "ecommerce": {
            "currency": "usd",
            "value": "14.99", // wrong type
            "items": [
              {
                "item_id": 56012347401,
                "item_name": 'cool-hat',
                "item_variant": "blue",
                "item_vendor": "by-hats",
                "price": 14.99
              }
            ]
          }
        });
        expect(eventPushed.error).toBeTruthy();
      });
    });
  });
});
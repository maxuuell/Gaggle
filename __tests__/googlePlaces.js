import { getResultsFromKeyword, categories } from '../google/googlePlaces';

describe('getResultsFromKeyword', () => {
  it('is a function', () => {
    expect(typeof getResultsFromKeyword).toBe('function');
  });
  it('accepts a location, keyword, and radius', () => {
    expect(getResultsFromKeyword.length).toBe(3);
  });
  it('returns a promise', () => {
    expect(typeof getResultsFromKeyword([0, 0], 'fun')).toBe('object');
  });
});

describe('categories', () => {
  it('is an array', () => {
    expect(Array.isArray(categories)).toBe(true);
  });
  it('contains more than one element', () => {
    expect(categories.length).not.toBeLessThan(1);
  });
  it('contains relevant categories for search', () => {
    expect(categories).toContain('Restaurants');
  });
});

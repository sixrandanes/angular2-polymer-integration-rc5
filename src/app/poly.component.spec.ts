import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PolyAppComponent } from '../app/poly.component';

beforeEachProviders(() => [PolyAppComponent]);

describe('App: Poly', () => {
  it('should create the app',
      inject([PolyAppComponent], (app: PolyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'poly works!\'',
      inject([PolyAppComponent], (app: PolyAppComponent) => {
    expect(app.title).toEqual('poly works!');
  }));
});

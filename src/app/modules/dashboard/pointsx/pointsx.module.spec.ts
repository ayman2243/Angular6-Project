import { PointsxModule } from './pointsx.module';

describe('PointsxModule', () => {
  let pointsxModule: PointsxModule;

  beforeEach(() => {
    pointsxModule = new PointsxModule();
  });

  it('should create an instance', () => {
    expect(pointsxModule).toBeTruthy();
  });
});

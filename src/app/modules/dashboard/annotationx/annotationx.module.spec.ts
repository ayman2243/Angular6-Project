import { AnnotationxModule } from './annotationx.module';

describe('AnnotationxModule', () => {
  let annotationxModule: AnnotationxModule;

  beforeEach(() => {
    annotationxModule = new AnnotationxModule();
  });

  it('should create an instance', () => {
    expect(annotationxModule).toBeTruthy();
  });
});

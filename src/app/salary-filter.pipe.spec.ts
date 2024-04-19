import { SalaryFilterPipe } from './salary-filter.pipe';

describe('SalaryFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new SalaryFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

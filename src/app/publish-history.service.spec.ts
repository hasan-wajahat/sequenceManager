/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublishHistoryService } from './publish-history.service';

describe('Service: PublishHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishHistoryService]
    });
  });

  it('should ...', inject([PublishHistoryService], (service: PublishHistoryService) => {
    expect(service).toBeTruthy();
  }));
});

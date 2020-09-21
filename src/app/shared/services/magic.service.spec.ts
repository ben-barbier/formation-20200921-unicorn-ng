import { TestBed } from '@angular/core/testing';
import { MagicService } from './magic.service';

describe('MagicService', () => {
    let service: MagicService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MagicService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('enchant Benjamin', () => {
        // Given
        const testCases = [
            { name: 'Benjamin', expectedResult: 'BeNjAmIn' },
            { name: 'benjamin', expectedResult: 'BeNjAmIn' },
            { name: 'benjamin   ', expectedResult: 'BeNjAmIn' },
        ];

        // When
        const results = testCases.map(testCase => ({ ...testCase, result: service.enchant(testCase.name) }));

        // Then
        results.forEach(result => expect(result.result).toBe(result.expectedResult));
    });
});

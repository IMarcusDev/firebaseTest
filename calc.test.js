const { calcWeightedGrade, percentile } = require('./calc');

describe('Pruebas de notas', () => {
    test('calcula nota con dos examenes', () => {
    const notas = [
        {score: 75, weight: 0.4},
        {score: 85, weight: 0.6}
    ];
    expect(calcWeightedGrade(notas)).toBeCloseTo(81.0);
    });

    test('calcula nota con tres examenes', () => {
        const notas = [
            {score: 60, weight: 0.2},
            {score: 80, weight: 0.3},
            {score: 90, weight: 0.5}
        ];
        expect(calcWeightedGrade(notas)).toBeCloseTo(81.0);
    });

    test('calcula nota con un examen', () => {
        const notas = [{score: 95, weight: 1.0}];
        expect(calcWeightedGrade(notas)).toBeCloseTo(95.0);
    });

    test('calcula nota con pesos iguales', () => {
        const notas = [
            {score: 70, weight: 0.5},
            {score: 90, weight: 0.5}
        ];
        expect(calcWeightedGrade(notas)).toBeCloseTo(80.0);
    });
});

describe('Pruebas del percentil', () => {
    test('calcula percentil 50 con cinco numeros', () => {
        const numeros = [10, 20, 30, 40, 50];
        expect(percentile(50, numeros)).toBeCloseTo(30);
    });
    
    test('calcula percentil 75 con numeros desordenados', () => {
        const numeros = [90, 50, 70, 60, 80];
        expect(percentile(75, numeros)).toBeCloseTo(80);
    });
    
    test('calcula percentil 25 con seis numeros', () => {
        const numeros = [5, 15, 25, 35, 45, 55];
        expect(percentile(25, numeros)).toBeCloseTo(15);
    });
    
    test('calcula percentil 0 devuelve el minimo', () => {
        const numeros = [8, 4, 12, 6];
        expect(percentile(0, numeros)).toBeCloseTo(4);
    });
    
    test('calcula percentil 100 devuelve el maximo', () => {
        const numeros = [8, 4, 12, 6];
        expect(percentile(100, numeros)).toBeCloseTo(12);
    });
    
    test('calcula percentil con array vacio devuelve cero', () => {
        expect(percentile(50, [])).toBeCloseTo(0);
    });
});

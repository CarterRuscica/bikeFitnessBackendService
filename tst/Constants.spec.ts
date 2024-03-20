import { OPENAI_SECRET_KEY, PORT } from 'src/Constants';

test('should check config.env is setup', () => {
    expect(OPENAI_SECRET_KEY).not.toBe(undefined);
    expect(PORT).not.toBe(undefined);
});

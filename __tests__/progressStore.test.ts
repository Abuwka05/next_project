import { useProgressStore } from '@/store/progressStore';

describe('Progress store', () => {
  it('marks word as known', () => {
    const { markKnown } = useProgressStore.getState();

    markKnown('Hello');

    const state = useProgressStore.getState();
    expect(state.knownWords).toContain('Hello');
  });
});

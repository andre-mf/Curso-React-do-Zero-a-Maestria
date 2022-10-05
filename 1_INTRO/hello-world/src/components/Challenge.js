const Challenge = () => {
  const A = 5;
  const B = 10;

  return (
    <div>
      <p>A: {A}</p>
      <p>B: {B}</p>
      <button onClick={() => console.log(A + B)}>
        Clique parea ver a soma
      </button>
    </div>
  );
};

export default Challenge;
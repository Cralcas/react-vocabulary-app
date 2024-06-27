export const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="genre">Genre</label>
        <input id="genre" type="text" />

        <label htmlFor="language">Language</label>
        <input id="language" type="text" />

        <label htmlFor="words">Words</label>
        <div>
          <label htmlFor="word">Word:</label>
          <input id="word" type="text" />

          <label htmlFor="translation">Translation:</label>
          <input id="translation" type="text" />
        </div>
      </form>
    </>
  );
};

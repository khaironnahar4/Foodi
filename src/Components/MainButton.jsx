

function MainButton({text}) {
  return (
    <button className="btn btn-primary border-none text-white bg-[var(--color-primary)] hover:bg-[var(--color-primaryHover)] px-6 py-3">
    {text}
  </button>
  )
}

export default MainButton


function SectionHeading({heading, subHeading}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <div>
            <h2 className="text-sm tracking-widest uppercase">{heading}</h2>
            <div className="bg-[#d48f1e] h-0.5 w-14 mx-auto mb-6"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {subHeading}
          </h1>
          <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. 
          Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </p>
    </div>
  )
}

export default SectionHeading
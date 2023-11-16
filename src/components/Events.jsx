const Events = ({ event, myProfile }) => {
  const date =
    event.date.slice(8, 10) +
    "-" +
    event.date.slice(5, 8) +
    event.date.slice(0, 4);
  return (
    <div className="d-flex flex-column gap-2 ms-2 single-event">
      <div className="d-flex gap-1 mt-2">
        <p className="mb-0">{myProfile && myProfile.name}</p>
        <p className="mb-0">ha pubblicato questo post.</p>
      </div>
      <p className="text-danger mb-0 ">
        {date}, {event.time}{" "}
      </p>
      <p className="fw-bold mb-3 ">{event.description}</p>
    </div>
  );
};

export default Events;

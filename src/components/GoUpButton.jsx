import { Button } from "react-bootstrap";

const GoUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button onClick={scrollToTop} className="rounded-circle fs-4 go-up">
      <i class="bi bi-arrow-up-circle-fill"></i>
    </Button>
  );
};

export default GoUpButton;

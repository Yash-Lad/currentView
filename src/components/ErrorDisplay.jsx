import { Container, Alert, Button } from "react-bootstrap";

// ErrorDisplay - User-friendly error message component and Displays error messages with an optional retry button
const ErrorDisplay = ({ message, onRetry }) => {
  return (
    <Container className="my-5">
      <Alert variant="danger" className="text-center">
        <Alert.Heading>Oops! Something went wrong</Alert.Heading>
        <p className="mb-3">{message || "An unexpected error occurred"}</p>
        {onRetry && (
          <Button variant="outline-danger" onClick={onRetry}>
            Try Again
          </Button>
        )}
      </Alert>
    </Container>
  );
};

export default ErrorDisplay;

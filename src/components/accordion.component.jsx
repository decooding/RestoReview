import Accordion from 'react-bootstrap/Accordion';

function FlushExample() {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>В разработке</Accordion.Header>
                <Accordion.Body>
                    Тут будет форма для пользователей для оставление отзывов
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FlushExample;
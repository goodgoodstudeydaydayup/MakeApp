import { gql } from 'apollo-boost';

export default gql`
query tracking($barcode: String!, $courier_id: Int!) {
    tracking(barcode: $barcode,courier_id:$courier_id) {
        barcode
        courier_id
        courier_name
        current_status
    }
}
`;

import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const DeleteIcon = ({ width, height }) => (
  <Svg
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
     width={width}
     height={height}
  >
    <Rect width={76} height={76} rx={38} fill="#FF0000" fillOpacity={0.1} />
    <Path
      d="M28.6193 22.8957C28.6193 21.8837 29.0213 20.9131 29.7369 20.1975C30.4526 19.4819 31.4232 19.0798 32.4352 19.0798H43.8829C44.895 19.0798 45.8656 19.4819 46.5812 20.1975C47.2968 20.9131 47.6988 21.8837 47.6988 22.8957V26.7116H55.3306C55.8367 26.7116 56.322 26.9127 56.6798 27.2705C57.0376 27.6283 57.2386 28.1136 57.2386 28.6196C57.2386 29.1256 57.0376 29.6109 56.6798 29.9687C56.322 30.3265 55.8367 30.5276 55.3306 30.5276H53.291L51.6368 53.6939C51.5683 54.6567 51.1375 55.5576 50.4312 56.2154C49.725 56.8732 48.7956 57.2389 47.8305 57.2389H28.4857C27.5206 57.2389 26.5913 56.8732 25.885 56.2154C25.1787 55.5576 24.7479 54.6567 24.6794 53.6939L23.029 30.5276H20.9875C20.4815 30.5276 19.9962 30.3265 19.6384 29.9687C19.2805 29.6109 19.0795 29.1256 19.0795 28.6196C19.0795 28.1136 19.2805 27.6283 19.6384 27.2705C19.9962 26.9127 20.4815 26.7116 20.9875 26.7116H28.6193V22.8957ZM32.4352 26.7116H43.8829V22.8957H32.4352V26.7116ZM26.8525 30.5276L28.4876 53.423H47.8324L49.4675 30.5276H26.8525ZM34.3432 34.3435C34.8492 34.3435 35.3345 34.5445 35.6923 34.9023C36.0501 35.2601 36.2511 35.7454 36.2511 36.2514V47.6991C36.2511 48.2052 36.0501 48.6905 35.6923 49.0483C35.3345 49.4061 34.8492 49.6071 34.3432 49.6071C33.8371 49.6071 33.3518 49.4061 32.994 49.0483C32.6362 48.6905 32.4352 48.2052 32.4352 47.6991V36.2514C32.4352 35.7454 32.6362 35.2601 32.994 34.9023C33.3518 34.5445 33.8371 34.3435 34.3432 34.3435ZM41.975 34.3435C42.481 34.3435 42.9663 34.5445 43.3241 34.9023C43.6819 35.2601 43.8829 35.7454 43.8829 36.2514V47.6991C43.8829 48.2052 43.6819 48.6905 43.3241 49.0483C42.9663 49.4061 42.481 49.6071 41.975 49.6071C41.469 49.6071 40.9837 49.4061 40.6258 49.0483C40.268 48.6905 40.067 48.2052 40.067 47.6991V36.2514C40.067 35.7454 40.268 35.2601 40.6258 34.9023C40.9837 34.5445 41.469 34.3435 41.975 34.3435Z"
      fill="#FF0000"
    />
  </Svg>
)
export default DeleteIcon

import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <br/>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <br/>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;

// import { Link } from 'react-router-dom';
// // import { UserConsumer } from '../../providers/UserProvider';
// import { Navbar, Container } from 'react-bootstrap';

// const Navbar = ({}) => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="/">
//             Home
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text>
//               <Link to='/profile'>
//                 {username}
//               </Link>
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   )
// }

// // const ConnectedNavbar = (props) => (
// //   <UserConsumer>
// //     { value => <MainNavbar {...props} {...value} /> }
// //   </UserConsumer>
// // )

// export default Navbar;
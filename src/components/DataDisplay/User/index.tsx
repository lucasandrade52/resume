import UserIcon from '@material-ui/icons/AccountCircle';
import LogOutIcon from '@material-ui/icons/ExitToApp';

export default function User({ logged }: { logged: boolean }) {
  return <>
   {logged ? <UserIcon /> : <LogOutIcon /> }
  </>
}

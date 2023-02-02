import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BiSearch } from 'react-icons/bi';
import '../assets/header_modal_searrct.css'
const style = {

    position: 'absolute',
    top: '6%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
};
//salam

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <BiSearch onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input style={{ width: '90%', height: '50px', border: '1px solid white', padding: '15px' }} type="text" placeholder='Search products...' />
                    <button className='modal_css_header-search'><BiSearch /></button>
                </Box>
            </Modal>
        </>
    );
}

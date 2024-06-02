import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function UploadExerciseModal({
  openModal,
  setOpenModal,
  handleFormSubmit,
  exerciseName,
  setExerciseName,
  reps,
  setReps,
  weightLifted,
  setWeightLifted,
  exerciseList,
}) {
  return (
    <React.Fragment>
      <Modal open={openModal} onClose={() => setOpenModal(!openModal)}>
        <ModalDialog>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <DialogTitle>Add Exercise</DialogTitle>
          <Input
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            autoFocus
            required
            disabled
          />
          {/* <DialogContent>Fill in the information of the project.</DialogContent> */}
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Exercise Name:</FormLabel>
                <Select defaultValue="dog">
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option value={exercise?.key}>{exercise?.value}</Option>
                    ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Weight Lifted</FormLabel>
                <Input
                  type="number"
                  value={weightLifted}
                  onChange={(e) => setWeightLifted(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Reps Performed</FormLabel>
                <Input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  required
                />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Modal from '@mui/joy/Modal';
// import ModalDialog from '@mui/joy/ModalDialog';
// import DialogTitle from '@mui/joy/DialogTitle';
// import DialogContent from '@mui/joy/DialogContent';
// import Stack from '@mui/joy/Stack';
// import Add from '@mui/icons-material/Add';

// const BasicModalDialog = ({
//     openModal,
//     setOpenModal
// }
// ) => {
//     return (
//         <React.Fragment>
//             <Button
//                 variant="outlined"
//                 color="neutral"
//                 startDecorator={<Add />}
//                 onClick={() => setOpenModal(true)}
//             >
//                 New project
//             </Button>
//             <Modal open={openModal} onClose={() => setOpenModal(false)}>
//                 <ModalDialog>
//                     <DialogTitle>Create new project</DialogTitle>
//                     <DialogContent>Fill in the information of the project.</DialogContent>
//                     <form
//                         onSubmit={(event) => {
//                             event.preventDefault();
//                             setOpenModal(false);
//                         }}
//                     >
//                         <Stack spacing={2}>
//                             <FormControl>
//                                 <FormLabel>Name</FormLabel>
//                                 <Input autoFocus required />
//                             </FormControl>
//                             <FormControl>
//                                 <FormLabel>Description</FormLabel>
//                                 <Input required />
//                             </FormControl>
//                             <Button type="submit">Submit</Button>
//                         </Stack>
//                     </form>
//                 </ModalDialog>
//             </Modal>
//         </React.Fragment>
//     );
// }

// export default BasicModalDialog;

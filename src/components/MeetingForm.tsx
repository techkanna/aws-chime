import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import {
  Flex,
  FormField,
  Input,
  PrimaryButton,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';
import { addAttendeeToDB, addMeetingToDB, createMeeting, getAttendeeFromDB, getMeetingFromDB, joinMeeting } from '../utiles/api';

const MeetingForm: FC = () => {
  const meetingManager = useMeetingManager();
  
  const [meetingTitle, setMeetingTitle] = useState('test');
  const [attendeeName, setName] = useState('me');

  function getAttendeeCallback() {
    return async (chimeAttendeeId: string, externalUserId?: string) => {
      const attendeeInfo: any = await getAttendeeFromDB(chimeAttendeeId);
      const attendeeData = attendeeInfo.data.getAttendee;
      return {
        name: attendeeData.name
      };
    }
  }

  const clickedJoinMeeting = async (event: FormEvent) => {
    event.preventDefault();    

    meetingManager.getAttendee = getAttendeeCallback();
    const title = meetingTitle.trim().toLocaleLowerCase();
    const name = attendeeName.trim();

    // Fetch the Meeting via AWS AppSync - if it exists, then the meeting has already
    // been created, and you just need to join it - you don't need to create a new meeting
    const meetingResponse: any = await getMeetingFromDB(title);
    console.log(meetingResponse);
    
    // const meetingJson = meetingResponse.data.getMeeting;
    // try {
    //   if (meetingJson) {
    //     const meetingData = JSON.parse(meetingJson.data);
    //     const joinInfo = await joinMeeting(meetingData.MeetingId, name);
    //     await addAttendeeToDB(joinInfo.Attendee.AttendeeId, name);

    //     await meetingManager.join({
    //       meetingInfo: meetingData,
    //       attendeeInfo: joinInfo.Attendee
    //     });
    //   } else {
    //     const joinInfo = await createMeeting(title, name, 'us-east-2');
    //     await addMeetingToDB(title, joinInfo.Meeting.MeetingId, JSON.stringify(joinInfo.Meeting)); await addAttendeeToDB(joinInfo.Attendee.AttendeeId, name);

    //     await meetingManager.join({
    //       meetingInfo: joinInfo.Meeting,
    //       attendeeInfo: joinInfo.Attendee
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    // // At this point you can let users setup their devices, or start the session immediately
    // await meetingManager.start();
  };

  return (
    <form>
      <FormField
        field={Input}
        label='Meeting Id'
        value={meetingTitle}
        fieldProps={{
          name: 'Meeting Id',
          placeholder: 'Enter a Meeting ID',
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setMeetingTitle(e.target.value);
        }}
      />
      <FormField
        field={Input}
        label="Name"
        value={attendeeName}
        fieldProps={{
          name: 'Name',
          placeholder: 'Enter your Attendee Name'
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <Flex
        container
        layout="fill-space-centered"
        style={{ marginTop: '2.5rem' }}
      >
        <PrimaryButton label="Join Meeting" onClick={clickedJoinMeeting} />
      </Flex>
    </form>
  );
};

export default MeetingForm;
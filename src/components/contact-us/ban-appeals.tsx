import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControls from './form-controls';
import { TextField, TextareaField } from '../fields';

interface Values {
	nick: string;
	email?: string;
	understanding?: string;
	additionalInformation?: string;
	prevention?: string;
}

const validationSchema: Yup.ObjectSchema<Values> = Yup.object().shape({
	nick: Yup.string().required(),
	email: Yup.string().email(),
	understanding: Yup.string(),
	additionalInformation: Yup.string(),
	prevention: Yup.string(),
}).required();

const ContactUsBanAppeals: React.FC = () => {
	async function handleSubmit(values: Values) {
		console.info(values);
	}

	return (
		<section>
			<h1>Appeals</h1>
			<p>
				Hello, thank you for contacting us. This page will help gather information to be sent to
				us, and we&apos;ll use this information to answer your question. Be as detailed and honest
				as you can. Thank you!
			</p>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					nick: '',
					email: '',
					understanding: '',
					additionalInformation: '',
					prevention: '',
				}}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						<Row>
							<Col xs={12} sm={6}>
								<TextField
									name="nick"
									label="IRC Nick / Username:"
									disabled={isSubmitting}
									required
								/>
							</Col>
							<Col xs={12} sm={6}>
								<TextField
									name="email"
									label="Email"
									type="email"
									disabled={isSubmitting}
									required
								/>
							</Col>
							<Col xs={12}>
								<TextareaField
									name="understanding"
									label="If you know why you were banned do you understand why you were removed? If so,
										list the reason, otherwise we&apos;ll respond to the above email with a
										clarification	on your removal."
									disabled={isSubmitting}
								/>
							</Col>
							<Col xs={12}>
								<TextareaField
									name="additionalInformation"
									label="Is there any other background information about the removal that you would
										like to give us?"
									disabled={isSubmitting}
								/>
							</Col>
							<Col xs={12}>
								<TextareaField
									name="prevention"
									label="What have you done to ensure that the above does not happen in the future?"
									disabled={isSubmitting}
								/>
							</Col>
						</Row>
						<Row>
							<FormControls xs={12}>
								<Button type="reset" variant="warning">Reset</Button>
								<Button type="submit" variant="success">Submit</Button>
							</FormControls>
						</Row>
					</Form>
				)}
			</Formik>

			<h2>If you don&apos;t know why you&apos;re banned</h2>
			<p>
				We apologize for the inconvenience. There could be a mistake, or the ban reason was not
				communicated effectively. Assuming the ban was erroneous, provide the following
				information to help diagnose the issue. Otherwise, we can clarify the banning reason
				using the above nickname.
			</p>
			<p>
				If you&apos;re banned on a mobile phone, then you may not be banned. Mobile hosts are
				dynamic (change) and you could be assigned a host that was banned in the past. If you
				answer &quot;yes&quot; to this, try to enable then disable airplane mode to try and
				get a new host. If that does not work, turn your phone off and on.
			</p>
		</section>
	);
};

export default ContactUsBanAppeals;

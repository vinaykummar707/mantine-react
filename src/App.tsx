import {
	ActionIcon,
	AppShell,
	Burger,
	Button,
	Card,
	Group,
	Stack,
	Textarea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
	IconAdjustments,
	IconArrowBarUp,
	IconArrowUp,
	IconArrowUpBar,
	IconArrowUpCircle,
	IconCamera,
	IconCircleArrowUpFilled,
	IconMicrophone,
	IconPaperclip,
	IconSend,
	IconSend2,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

export default function App() {
	const [opened, { toggle }] = useDisclosure();
  

	return (
		<AppShell>
			<AppShell.Main p={'md'} display={'flex'}>
				<Stack flex={'1'} align="center" justify="end">
					<Card p={'sm'}  radius={'lg'} bg={''}  shadow='lg' w={'550px'}>
						<Stack gap={'sm'}>
							<Textarea
								autosize
								variant="unstyled"
								size="sm"
								p={'0px'}
								placeholder="Ask anything related to jetblue"
							/>

							<Group justify="space-between">
								<Group gap={'sm'}>
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5 }}
									>
										<ActionIcon
											size={'md'}
											variant="subtle"
											c="gray.9"
											aria-label="Settings"
										>
											<IconCamera stroke={2} />
										</ActionIcon>
									</motion.div>
									<ActionIcon
										size={'md'}
										variant="subtle"
										c="gray.9"
										aria-label="Settings"
									>
										<IconPaperclip stroke={2} />
									</ActionIcon>
									<ActionIcon
										size={'md'}
										variant="subtle"
										c={'gray.9'}
										aria-label="Settings"
									>
										<IconMicrophone stroke={2} />
									</ActionIcon>
								</Group>
								<ActionIcon
									size={'lg'}
									variant="filled"
									color="black"
									radius={'xl'}
									aria-label="Settings"
								>
									<IconArrowUp size={18} stroke={2} />
								</ActionIcon>
							</Group>
						</Stack>
					</Card>
				</Stack>
			</AppShell.Main>
		</AppShell>
	);
}
